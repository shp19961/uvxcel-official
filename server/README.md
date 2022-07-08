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