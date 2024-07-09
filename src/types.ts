import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    Details: { itemId: number; otherParam: string };
    JournalEntry: undefined;
    Login: undefined;
    Signup: undefined;
  };
  