const supabase = require("../config/config");

exports.getAllUsers = async (req, res) => {
  const { data, error } = await supabase.from("usuarios").select("*");
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data[0]);
};

exports.createUser = async (req, res) => {
  const { data, error } = await supabase.from("usuarios").insert(req.body);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json(data);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("usuarios")
    .update(req.body)
    .eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("usuarios").delete().eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};
