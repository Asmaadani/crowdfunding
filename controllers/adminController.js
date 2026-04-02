const User = require('../models/user');
const Investment = require('../models/Investment');

exports.getGlobalStats = async (req, res) => {
  try {
    const totalInvestors = await User.countDocuments({ role: 'investor' });
    const totalOwners = await User.countDocuments({ role: 'owner' });
    
    // Récupérer tous les investissements avec détails
    const allInvestments = await Investment.find()
      .populate('investor', 'name email')
      .populate('project', 'title');

    res.json({
      stats: { totalInvestors, totalOwners },
      activities: allInvestments
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};