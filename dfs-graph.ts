// dfs-graph.ts

class Graph {
  private adjacencyList: Record<string, string[]> = {};

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(from: string, to: string): void {
    this.adjacencyList[from].push(to);
    this.adjacencyList[to].push(from);
  }

  dfs(startingNode: string): string[] {
    const visited: Record<string, boolean> = {};
    const result: string[] = [];

    const dfsVisit = (node: string) => {
      visited[node] = true;
      result.push(node);
      this.adjacencyList[node].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfsVisit(neighbor);
        }
      });
    };

    dfsVisit(startingNode);
    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

const dfsResult = graph.dfs("A");
console.log(dfsResult); // ["A", "B", "D", "C"]
