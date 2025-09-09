import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useCreateChatClient, Chat, OverlayContext, OverlayProvider } from 'stream-chat-expo';
import type { LocalMessage } from 'stream-chat';
import { StreamChat } from 'stream-chat';

// import {useAuth} from ;
// import {streamTokenProvider} from ;

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIifQ.-MLPypZXE-Q4kuwRPqXBvJV8mAduqjewcA63cAp_pwg';

export default function ChatClient({ children }: { children: React.ReactNode }) {
  // const user = useAuth();

  const [client, setClient] = useState<StreamChat | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeClient = async () => {
      try {
        console.log('Initializing Stream Chat client...');
        const chatClient = StreamChat.getInstance('cpnuj9dzj689');

        const user = { id: '12' };

        await chatClient.connectUser({ id: user.id, name: 'Steves' }, token);
        console.log('Client connected successfully');
        setClient(chatClient);

        const channel = chatClient.channel('messaging', 'channel1', {
          name: 'The Park',
          members: [user.id],
        } as any);
        await channel.watch();
        console.log('Channel connected successfully');
      } catch (error) {
        console.error('Client initialization failed', error);
      } finally {
        setLoading(false);
      }
    };

    initializeClient();

    return () => {
      if (client) {
        console.log('Disconnecting client');
        client.disconnectUser();
      }
    };
  }, []);

  if (loading || !client) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fefbf3',
        }}>
        <ActivityIndicator color="#000" />
      </View>
    );
  }

  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  );
}
