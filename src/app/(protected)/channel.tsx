import { Redirect, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Channel, MessageInput, MessageList } from 'stream-chat-expo';
import useStore from '~/src/store';

export default function ChannelScreen() {
  const channel = useStore((state) => state.channel);

  if (!channel) {
    return <Redirect href="/" />;
  }

  return (
    <SafeAreaView edges={['bottom']} style={{ backgroundColor: 'white' }}>
      <Stack.Screen
        options={{ headerTitle: (channel.data as { name?: string })?.name ?? 'chat' }}
      />
      <Channel channel={channel}>
        <MessageList />
        <MessageInput />
      </Channel>
    </SafeAreaView>
  );
}
