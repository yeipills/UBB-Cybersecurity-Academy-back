const supabase = require("../config/config");

exports.getAllEnrollments = async (req, res) => {
  const { data, error } = await supabase.from("inscripciones").select("*");
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};

exports.getEnrollmentById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("inscripciones")
    .select("*")
    .eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data[0]);
};

exports.createEnrollment = async (req, res) => {
  const { data, error } = await supabase.from("inscripciones").insert(req.body);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json(data);
};

exports.updateEnrollment = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("inscripciones")
    .update(req.body)
    .eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};

exports.deleteEnrollment = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("inscripciones")
    .delete()
    .eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};
