type Result = {
  name: string;
  email: string;
  score: number;
  rank: number;
};
export const generateCSV = (results: Result[]): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const headers = ["Name", "Email", "Score", "Rank"];
      const rows = results.map((r) => [
        r.name,
        r.email,
        r.score.toString(),
        r.rank.toString(),
      ]);

      const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "quiz-results.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      resolve(); // Tell toast.promise it's done
    } catch (error) {
      reject(error); // Notify toast.promise of the error
    }
  });
};
