import { View, Text } from 'react-native';
import { ChannelList } from 'stream-chat-expo';
import { router } from 'expo-router';

export default function Home() {
  return <ChannelList onSelect={({ channel }) => router.push(`/channel`)} />;
}
