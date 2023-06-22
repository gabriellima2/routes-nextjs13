import { Modal } from "@/app/components/Modal";

type PhotoProps = { params: { id: string } };

export default function Photo(props: PhotoProps) {
  return (
    <Modal>
      <span className="w-full h-full flex-1 bg-white/10" />
    </Modal>
  )
}
