const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { createClient } = require("@supabase/supabase-js");

// Configurar Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // Buscar usuario en la base de datos
      const { data, error } = await supabase
        .from("usuarios")
        .select("*")
        .eq("email", profile.emails[0].value)
        .single();

      if (error) {
        // Si el usuario no existe, crearlo
        const { data: newUser, error: insertError } = await supabase
          .from("usuarios")
          .insert([
            {
              nombre: profile.displayName,
              email: profile.emails[0].value,
              rol_id: 3, // Asignar un rol por defecto, cambiar según sea necesario
            },
          ])
          .single();

        if (insertError) {
          return done(insertError, null);
        }

        return done(null, newUser);
      }

      return done(null, data);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("id", id)
    .single();

  done(error, data);
});
