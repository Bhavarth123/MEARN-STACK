const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// CREATE JOB
router.post("/", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.send(job);
});

// SEARCH + FILTER
router.get("/", async (req, res) => {
  try {
    const { title, location, minSalary, type } = req.query;

    let filter = {};

    // Search by title (case-insensitive)
    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }

    // Filter by location
    if (location) {
      filter.location = location;
    }

    // Filter by job type
    if (type) {
      filter.type = type;
    }

    // Filter by minimum salary
    if (minSalary) {
      filter.salary = { $gte: Number(minSalary) };
    }

    const jobs = await Job.find(filter);
    res.send(jobs);

  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.send("Job Deleted");
});

module.exports = router;