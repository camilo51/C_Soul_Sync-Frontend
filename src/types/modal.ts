export type ModalType = {
    title: string;
    description: string;
    onClose: () => void;
    onConfirm: () => void;
}