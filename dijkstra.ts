// dijkstra.ts

class Graph {
  private adjacencyList: Record<string, Record<string, number>> = {};

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = {};
    }
  }

  addEdge(from: string, to: string, weight: number): void {
    this.adjacencyList[from][to] = weight;
    this.adjacencyList[to][from] = weight;
  }

  dijkstra(start: string, end: string): number | null {
    const distances: Record<string, number> = {};
    const visited: Record<string, boolean> = {};
    const previous: Record<string, string | null> = {};

    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
      } else {
        distances[vertex] = Infinity;
      }
      previous[vertex] = null;
    }

    const queue: string[] = [...Object.keys(this.adjacencyList)];

    while (queue.length) {
      const closestVertex = queue.reduce((acc, vertex) => (distances[vertex] < distances[acc] ? vertex : acc));
      queue.splice(queue.indexOf(closestVertex), 1);
      if (closestVertex === end) {
        let path = [];
        let current = end;
        while (current !== null) {
          path.unshift(current);
          current = previous[current];
        }
        return path.join(" -> ");
      }

      for (const neighbor in this.adjacencyList[closestVertex]) {
        const totalDistance = distances[closestVertex] + this.adjacencyList[closestVertex][neighbor];
        if (totalDistance < distances[neighbor]) {
          distances[neighbor] = totalDistance;
          previous[neighbor] = closestVertex;
        }
      }
    }

    return null;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "C", 2);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 1);

const shortestPath = graph.dijkstra("A", "D");
console.log("Shortest path:", shortestPath); // "A -> B -> C -> D"
