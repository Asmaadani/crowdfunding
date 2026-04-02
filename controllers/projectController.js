const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  try {
    const { title, description, targetCapital, initialInvestment, maxPercentage } = req.body;
    
    const newProject = await Project.create({
      title,
      description,
      targetCapital,
      currentCapital: initialInvestment || 0,
      maxInvestmentPercentage: maxPercentage || 50,
      owner: req.user.id,
      status: 'open'
    });

    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMyProjects = async (req, res) => {
  const projects = await Project.find({ owner: req.user.id });
  res.json(projects);
};