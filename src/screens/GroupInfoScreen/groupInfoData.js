export const getInitialGroup = (groupId) => ({
  id: String(groupId || '1'),
  name: 'React Native Developers',
  description: 'A community for React Native enthusiasts',
  avatar: null,
  banner: null,
  owner: { id: '1', name: 'Alice Johnson', avatar: null },
  admins: [
    { id: '2', name: 'Bob Smith', email: 'bob@example.com', avatar: null },
  ],
  members: [
    { id: '3', name: 'Carol White', email: 'carol@example.com', avatar: null },
    { id: '4', name: 'David Brown', email: 'david@example.com', avatar: null, is_muted: true },
    { id: '5', name: 'Eve Davis', email: 'eve@example.com', avatar: null },
  ],
  createdAt: '2024-01-15T10:00:00Z',
  permissions: {
    only_admins_message: false,
    is_private: false,
    slow_mode_delay: 0,
  },
});

export const activities = [
  { id: '1', action: 'promoted_admin', actor: 'Alice', target: 'Bob', time: '2 hours ago' },
  { id: '2', action: 'member_joined', actor: 'Carol', time: '1 day ago' },
  { id: '3', action: 'updated_photo', actor: 'Alice', time: '3 days ago' },
];