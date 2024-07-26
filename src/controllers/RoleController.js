const supabase = require("../config/config");

exports.getAllRoles = async (req, res) => {
  const { data, error } = await supabase.from("roles").select("*");
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};

exports.getRoleById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("roles").select("*").eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data[0]);
};

exports.createRole = async (req, res) => {
  const { data, error } = await supabase.from("roles").insert(req.body);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json(data);
};

exports.updateRole = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("roles")
    .update(req.body)
    .eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};

exports.deleteRole = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("roles").delete().eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};
