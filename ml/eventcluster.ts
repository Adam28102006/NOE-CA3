import { KMeans } from 'ml-kmeans';
import natural from 'natural';
import fs from 'fs';
import path from 'path';

export interface Event {
  id: number;
  title: string;
  description: string;
  cluster?: number;
}

let events: Event[] = [];
let initialized = false;


function initializeClusters(): void {
  if (initialized) return; 

  const filePath = path.join(__dirname, '..', 'data', 'events.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  events = JSON.parse(rawData);

  const texts = events.map(e => `${e.title} ${e.description}`);

  const tfidf = new natural.TfIdf();
  texts.forEach(text => tfidf.addDocument(text));

  function documentToVector(docIndex: number): number[] {
    const vector: number[] = [];
    tfidf.listTerms(docIndex).forEach(term => {
      vector.push(term.tfidf);
    });
    return vector;
  }

  const vectors = texts.map((_, idx) => documentToVector(idx));


  const maxLength = Math.max(...vectors.map(v => v.length));
  const paddedVectors = vectors.map(v => {
    const copy = [...v];
    while (copy.length < maxLength) copy.push(0);
    return copy;
  });

  const numClusters = Math.min(3, events.length); 
  const { clusters } = KMeans(paddedVectors, numClusters);

  events.forEach((e, idx) => e.cluster = clusters[idx]);

  initialized = true;
}
 
export function getSimilarEvents(eventId: number): Event[] {
  initializeClusters();

  const target = events.find(e => e.id === eventId);
  if (!target) return [];

  return events.filter(e => e.cluster === target.cluster && e.id !== eventId);
}


export function getAllClusteredEvents(): Event[] {
  initializeClusters();
  return events;
}
