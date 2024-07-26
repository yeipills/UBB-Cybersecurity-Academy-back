const supabase = require("../config/config");

exports.getAllCourses = async (req, res) => {
  const { data, error } = await supabase.from("cursos").select("*");
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};

exports.getCourseById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("cursos")
    .select("*")
    .eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data[0]);
};

exports.createCourse = async (req, res) => {
  const { data, error } = await supabase.from("cursos").insert(req.body);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json(data);
};

exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("cursos")
    .update(req.body)
    .eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};

exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("cursos").delete().eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};
