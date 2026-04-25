import express from "express";

export function startMockHcm() {
  const app = express();
  app.use(express.json());

  app.post("/hcm/validate", (req, res) => {
    res.json({
      valid: true,
      remainingBalance: 10,
    });
  });

  app.post("/hcm/batch", (req, res) => {
    res.json({
      success: true,
    });
  });

  app.listen(4001, () => {
    console.log("Mock HCM running on port 4001");
  });
}
