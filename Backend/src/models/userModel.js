const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name:{
        type: String,
        required: [true, "El nombre es obligatorio"],
        minlength: [3, "El nombre debe tener al menos 3 caracteres"],
        maxlength: 30,
    },
    username:{
        type: String,
        required: [true, "El nombre de usuario es obligatorio"],
        minlength: [3, "El nombre de usuario debe tener al menos 3 caracteres"],
        maxlength: 30,
    },
    email:{
        type: String,
        required: [true, "El correo es obligatorio"],
        unique: [true, "El email introducido ya existe"],
    },
    password:{
        type: String,
        required: [true, "La contraseña es obligatoria"],
    },
    profilePicture:{
        type: String,
        default: "",
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    isActive:{
        type: Boolean,
        default: true,
    },
})

const userModel = mongoose.model("User", userSchema, "users");

module.exports = userModel;