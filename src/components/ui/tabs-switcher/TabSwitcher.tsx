import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import Typography from '@/components/ui/Typography/Typography'
import { UserContext } from '@/components/ui/changeTheme/Context'
import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabSwitcher.module.scss'

export type Tab = {
  disabled?: boolean
  locale: string
  text: string
  value: string
}

type Props = {
  className?: string
  label?: string
  onValueChange: (value: string) => void
  tabs: Tab[]
  value: string
}

export const TabSwitcher = ({ className, label, onValueChange, tabs, value }: Props) => {
  const { t: tab } = useTranslation()
  const context = useContext(UserContext)

  return (
    <div className={clsx(s.div, className)}>
      <Typography variant={'body2'}>{label}</Typography>
      <Tabs.Root
        activationMode={'manual'}
        className={s.root}
        onValueChange={onValueChange}
        value={value}
      >
        <Tabs.List className={s.tabList}>
          {tabs.map(t => (
            <Tabs.Trigger
              className={clsx(s.trigger, context?.theme === 'sun' ? s.sun : '')}
              disabled={t.disabled}
              key={t.value}
              // value={t.value}
              value={t.locale}
            >
              {/*<Typography variant={'subtitle2'}>{t.value}</Typography>*/}
              <Typography variant={'subtitle2'}>{tab(`${t.locale}`)}</Typography>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
