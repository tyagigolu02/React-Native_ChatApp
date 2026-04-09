import React from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../screens/FriendProfileScreen/FriendProfileScreen.styles';

const FriendProfileModals = ({
  colors,
  friendName,
  showUnfriendModal,
  setShowUnfriendModal,
  showBlockModal,
  setShowBlockModal,
  showImageModal,
  setShowImageModal,
  activeImageUrl,
  handleUnfriend,
  handleBlock,
}) => {
  return (
    <>
      <Modal
        visible={showUnfriendModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowUnfriendModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.bgCard }]}>
            <Ionicons name="person-remove" size={48} color="#f59e0b" />
            <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>Unfriend Contact?</Text>
            <Text style={[styles.modalMessage, { color: colors.textSecondary }]}>
              Are you sure you want to remove {friendName} from your contacts?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.bgSecondary }]}
                onPress={() => setShowUnfriendModal(false)}
              >
                <Text style={[styles.modalButtonText, { color: colors.textPrimary }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#f59e0b' }]}
                onPress={handleUnfriend}
              >
                <Text style={[styles.modalButtonText, { color: '#fff' }]}>Unfriend</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showBlockModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowBlockModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.bgCard }]}>
            <Ionicons name="ban" size={48} color="#ef4444" />
            <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>Block Contact?</Text>
            <Text style={[styles.modalMessage, { color: colors.textSecondary }]}>
              {friendName} will no longer be able to send you messages or see when you're online.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.bgSecondary }]}
                onPress={() => setShowBlockModal(false)}
              >
                <Text style={[styles.modalButtonText, { color: colors.textPrimary }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#ef4444' }]}
                onPress={handleBlock}
              >
                <Text style={[styles.modalButtonText, { color: '#fff' }]}>Block</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showImageModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowImageModal(false)}
      >
        <View style={styles.imageModalOverlay}>
          <TouchableOpacity style={styles.imageModalClose} onPress={() => setShowImageModal(false)}>
            <Ionicons name="close" size={32} color="#fff" />
          </TouchableOpacity>
          {activeImageUrl && (
            <Image source={{ uri: activeImageUrl }} style={styles.fullImage} resizeMode="contain" />
          )}
        </View>
      </Modal>
    </>
  );
};

export default FriendProfileModals;
