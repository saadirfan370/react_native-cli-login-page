import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import Top from './components/Top';
import BottomImg from './components/BottomImg';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Validator from "email-validator";


function App() {
  const [icon, setIcon] = useState(true);


  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('email is required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 6 character'),
  });

  const onLogin = (email, password) => {
    console.log(email, password);
  };


  return (
    <SafeAreaView style={{height: '100%'}}>
      <Top />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => onLogin(values.email, values.password)}
          validationSchema={LoginFormSchema}
          validateOnMount={true}>
          {({
            values,
            errors,
            isValid,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <>
              <View style={styles.innerContainer}>
                <Text style={styles.heading}>Logo</Text>
                <View style={{margin: 14}}>
                  <Text
                    style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                    Sign in to login
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, {
                      borderColor:
                        values.email.length < 1 || Validator.validate(values.email)
                          ? "#fff"
                          : "red",
                    
                    }]}
                    placeholder="email"
                    placeholderTextColor="#444"
                    autoCapitalize="none"
                    // keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input,
                    {
                      borderColor:
                      values.password.length < 1 || values.password.length > 6
                        ? "#fff"
                        : "red",
                    }]}
                    placeholder="password"
                    placeholderTextColor="#444"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={icon ? true: false}
                    textContentType="password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  <TouchableOpacity
                    style={{position: 'absolute', right: 18}}
                    onPress={() => setIcon(!icon)}>
                    <Icon
                      name={icon ? 'eye' : 'eye-with-line'}
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      color: '#777777',
                      fontSize: 16,
                      fontWeight: '400',
                      marginTop: 0,
                      marginBottom: 18,
                      alignItems: 'flex-end',
                    }}>
                    Forgot Password?
                  </Text>
                </View>
                <TouchableOpacity onPress={handleSubmit}
              disabled={!isValid} style={{width: '100%'}}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#FD0D0D', '#EEE61A']}
                    style={[styles.submitButton(!isValid), {borderRadius: 25}]}>
                    <Text style={styles.buttonText}>Sign In</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <View style={{margin: 15}}>
                  <Text
                    style={{fontSize: 16, fontWeight: '400', color: '#777777'}}>
                    Don’t have an account?{' '}
                    <Text style={{color: '#FF5C00'}}>Sig Up</Text>
                  </Text>
                </View>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
      <BottomImg />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FD0D0D',
  },
  inputContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    zIndex:10,
    width: '100%',
    borderRadius: 25,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 18,
    borderRadius: 25,
    color: 'black',
    backgroundColor: '#FAB598',
    padding: 10,
    paddingLeft: 18,
    borderWidth:2
  },
  submitButton:(isValid) =>( {
    padding: 10,
    height: '60px',
    width: '100%',
    opacity: isValid ? 1 : 1,
    zIndex:999
  }),
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default App;
