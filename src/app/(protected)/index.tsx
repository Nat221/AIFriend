import { View, Text } from 'react-native';
import { ChannelList } from 'stream-chat-expo';
import { router } from 'expo-router';
import useStore from '~/src/store';

export default function Home() {
  const setChannel = useStore((state) => state.setChannel);

  const user = { id: '123' };

  const filter = { members: { $in: [user.id] } };

  return (
    <ChannelList
      filters={filter}
      onSelect={(channel) => {
        setChannel(channel);
        router.push(`/channel`);
      }}
    />
  );
}
