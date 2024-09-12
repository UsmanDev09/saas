import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  contactForm: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  };
  signInForm: {
    email: string;
    password: string;
  };
  signUpForm: {
    name: string;
    email: string;
    password: string;
    rePassword: string;
  };
  surveyForm: {
    name: string;
    email: string;
    age: string;
    descriptionOption: string; // Single option selected from a dropdown
    friendRecommendationOption: string; // Single option selected from a dropdown
    languagesAndFrameworksOptions: string[]; // Multiple options selected
    comments: string;
  };
  contactForm2: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    preference: string; // Single option selected from a dropdown
    message: string;
  };
}

const initialState: FormState = {
  contactForm: {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  },
  signInForm: {
    email: '',
    password: '',
  },
  signUpForm: {
    name: '',
    email: '',
    password: '',
    rePassword: '',
  },
  surveyForm: {
    name: '',
    email: '',
    age: '',
    descriptionOption: '',
    friendRecommendationOption: '',
    languagesAndFrameworksOptions: [],
    comments: '',
  },
  contactForm2: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preference: '',
    message: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // Contact Form
    updateContactForm(state, action: PayloadAction<Partial<FormState['contactForm']>>) {
      state.contactForm = { ...state.contactForm, ...action.payload };
    },

    // Sign In Form
    updateSignInForm(state, action: PayloadAction<Partial<FormState['signInForm']>>) {
      state.signInForm = { ...state.signInForm, ...action.payload };
    },

    // Sign Up Form
    updateSignUpForm(state, action: PayloadAction<Partial<FormState['signUpForm']>>) {
      state.signUpForm = { ...state.signUpForm, ...action.payload };
    },

    // Survey Form
    updateSurveyForm(state, action: PayloadAction<Partial<FormState['surveyForm']>>) {
      state.surveyForm = { ...state.surveyForm, ...action.payload };
    },

    // Contact Form 2
    updateContactForm2(state, action: PayloadAction<Partial<FormState['contactForm2']>>) {
      state.contactForm2 = { ...state.contactForm2, ...action.payload };
    },
  },
});

export const {
  updateContactForm,
  updateSignInForm,
  updateSignUpForm,
  updateSurveyForm,
  updateContactForm2,
} = formSlice.actions;

export default formSlice.reducer;