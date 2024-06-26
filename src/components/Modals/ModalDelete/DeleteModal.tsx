import { ReactNode, memo } from 'react'
import { useTranslation } from 'react-i18next'

import Typography from '@/components/ui/Typography/Typography'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'

import s from './deleteModal.module.scss'

type Props = {
  children: ReactNode
  deleteFn: () => void
  open: boolean
  setOpen: (open: boolean) => void
  title: string
}
export const DeleteModal = memo(({ children, deleteFn, open, setOpen, title }: Props) => {
  const { t } = useTranslation()
  const deleteHandler = () => {
    deleteFn()
    setOpen(false)
  }
  const hideModal = () => {
    setOpen(false)
  }

  return (
    <Modal className={s.modal} onOpenChange={hideModal} open={open} title={title}>
      <div className={s.text}>{children}</div>
      <div className={s.btns}>
        <Button onClick={hideModal} variant={'secondary'}>
          <Typography>{t('deleteModal.cancel')}</Typography>
        </Button>
        <Button onClick={deleteHandler} type={'submit'} variant={'primary'}>
          <Typography>{title}</Typography>
        </Button>
      </div>
    </Modal>
  )
})
