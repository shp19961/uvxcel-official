const express = require("express");
const router = express.Router();
const allJobs = require("../models/jobModel");

// Route-1 add job details
router.post("/add-job", async (req, res) => {
  const {
    designation,
    experience,
    skills,
    salary,
    desc,
    location,
    status,
    type,
    shifts,
    positions,
    eligibility,
  } = req.body;
  const newJob = await new allJobs({
    designation,
    experience,
    skills,
    salary,
    desc,
    location,
    status,
    type,
    shifts,
    positions,
    eligibility,
  });
  newJob.save();
  res.send({ newJob });
});

// Route-2 get all jobs details
router.get("/get-jobs", async (req, res) => {
  const alljobs = await allJobs.find();
  res.send(alljobs);
});

// Route-3 get current job details
router.get("/get-current-job/:id", async (req, res) => {
  await allJobs.findOne({ _id: req.params.id }).then((job) => res.json(job));
});

// Route-4 edit current job details
router.put("/edit-job/:id", async (req, res) => {
  await allJobs.findByIdAndUpdate(req.params.id, req.body);
  res.send(req.body);
});

// Route-5 delete selected job
router.delete("/delete-job/:id", async (req, res) => {
  await allJobs.findByIdAndDelete(req.params.id);
  res.send("Job deleted");
});

module.exports = router;
