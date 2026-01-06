import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const toastConfig = {
  error: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#2979FF' }} // 🔵 blue highlight
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
      }}
      text2Style={{
        fontSize: 14,
        color: '#555',
      }}
    />
  ),

  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#2979FF' }} // same blue for success
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
      }}
    />
  ),
};



export default toastConfig