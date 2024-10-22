import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query);
  //   fakeDB.push(req.query)
  res.json({ message: "to do get method", users: fakeDB });
});

// app.get("/", (req, res) => {
//     res.json(fakeDB);
//   });
let fakeDB = [
    { id: 1, Fname: "Sagar", lName: "Ppoudel" },
    { id: 2, Fname: "ssasa", lName: "Ppoudel" },
    { id: 3, Fname: "Sasasagar", lName: "Ppoudel" },
  ];
router.post("/", (req, res) => {
  fakeDB.push(req.body);
  res.json({ message: "New data has been added" });
});

router.put("/", (req, res) => {
  console.log(req.body, req.headers.authorization, "from put");
  res.json({
    message: "to do put method",
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "From Delete to do ",
  });
});

export default router;