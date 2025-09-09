import { Channel } from 'stream-chat';
import { create } from 'zustand';

type State = {
  channel: Channel | null;
  setChannel: (channel: Channel | null) => void;
};

const useStore = create<State>((set) => ({
  channel: null,
  setChannel: (channel) => set({ channel }),
}));

export default useStore;
