import User from '../models/User.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const savedUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  const checkId = await User.findById(req.params.id);
  if (!checkId) return res.status(404).json({ message: 'data tidak ditemukan' });
  try {
    const updatedUser = await User.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(201).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  const checkId = await User.findById(req.params.id);
  if (!checkId) return res.status(404).json({ message: 'data tidak ditemukan' });
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });
    res.status(201).json(deletedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
