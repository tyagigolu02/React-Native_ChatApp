import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import groupInfoStyles from '../../screens/GroupInfoScreen/GroupInfoScreen.styles';

const GroupInfoActionSheet = ({
  visible,
  selectedMember,
  colors,
  isOwner,
  onClose,
  onPromote,
  onBan,
  onRemove,
}) => {
  if (!visible || !selectedMember) {
    return null;
  }

  const runAction = (callback) => {
    callback?.();
    onClose?.();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={groupInfoStyles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={[groupInfoStyles.actionSheet, { backgroundColor: colors.bgCard }]}>
          <Text style={[groupInfoStyles.actionSheetTitle, { color: colors.textPrimary }]}>
            {selectedMember.name}
          </Text>

          {isOwner && (
            <TouchableOpacity
              style={groupInfoStyles.actionSheetItem}
              onPress={() => runAction(onPromote)}
            >
              <Ionicons name="arrow-up" size={20} color={colors.textPrimary} />
              <Text style={[groupInfoStyles.actionSheetText, { color: colors.textPrimary }]}>
                Promote to Admin
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={groupInfoStyles.actionSheetItem}
            onPress={() => runAction(onBan)}
          >
            <Ionicons name="ban" size={20} color={colors.error} />
            <Text style={[groupInfoStyles.actionSheetText, { color: colors.error }]}>
              Ban Member
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={groupInfoStyles.actionSheetItem}
            onPress={() => runAction(onRemove)}
          >
            <Ionicons name="person-remove" size={20} color={colors.error} />
            <Text style={[groupInfoStyles.actionSheetText, { color: colors.error }]}>
              Remove from Group
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[groupInfoStyles.actionSheetItem, groupInfoStyles.cancelItem]}
            onPress={onClose}
          >
            <Text style={[groupInfoStyles.actionSheetText, { color: colors.textPrimary }]}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default GroupInfoActionSheet;
