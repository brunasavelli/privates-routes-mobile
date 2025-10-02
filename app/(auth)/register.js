import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
    ScrollView
} from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "expo-router";
import { defaultProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function RegisterScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { signUp } = useAuth();
    const router = useRouter();

    const handleRegister = async () => {
        if(!name || !email || !password || !confirmPassword) {
            Alert.alert("Erro", "Preencha todos os campos!");
            return;
        }

        if(password.length < 6) {
            Alert.alert("Erro", "A senha deve ter no mínimo 6 caracteres!");
            return;
        }

        if(password !== confirmPassword) {
            Alert.alert("Erro", "As senhas não coincidem!");
            return;
        }
    }
}