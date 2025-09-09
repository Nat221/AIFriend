import { Stack } from 'expo-router';
import ChatClient from '~/components/stream/ChatClient';

export default function ProtectedLayout() {
  return (
    <ChatClient>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: 'Chats' }} />
      </Stack>
    </ChatClient>
  );
}
