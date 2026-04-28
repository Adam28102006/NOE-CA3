import fs from "fs";
import path from "path";

export interface Event {
  id: number;
  title: string;
  description: string;
  cluster?: number;
}

let events: Event[] = [];
let initialized = false;


function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}


function similarity(a: string, b: string): number {
  const aTokens = new Set(tokenize(a));
  const bTokens = new Set(tokenize(b));

  let match = 0;
  aTokens.forEach(word => {
    if (bTokens.has(word)) match++;
  });

  return match;
}

function assignClusters(items: Event[], numClusters: number): void {
  const clusters: Event[][] = Array.from({ length: numClusters }, () => []);


  const seeds = items.slice(0, numClusters);

  for (const event of items) {
    let bestCluster = 0;
    let bestScore = -1;

    seeds.forEach((seed, idx) => {
      const score = similarity(
        `${seed.title} ${seed.description}`,
        `${event.title} ${event.description}`
      );

      if (score > bestScore) {
        bestScore = score;
        bestCluster = idx;
      }
    });

    clusters[bestCluster].push(event);
  }

  clusters.forEach((cluster, idx) => {
    cluster.forEach(e => {
      e.cluster = idx;
    });
  });
}


function initializeClusters(): void {
  if (initialized) return;

  const filePath = path.join(process.cwd(), "data", "events.json");
  const rawData = fs.readFileSync(filePath, "utf-8");
  events = JSON.parse(rawData);

  const numClusters = Math.min(3, events.length || 1);

  assignClusters(events, numClusters);

  initialized = true;
}


export function getSimilarEvents(eventId: number): Event[] {
  initializeClusters();

  const target = events.find(e => e.id === eventId);
  if (!target) return [];

  return events.filter(
    e => e.cluster === target.cluster && e.id !== eventId
  );
}


export function getAllClusteredEvents(): Event[] {
  initializeClusters();
  return events;
}
