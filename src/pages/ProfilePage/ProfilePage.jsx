import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './ProfilePage.module.scss'
import { MainTemplate } from '../../templates'
import ProfilePageData from './ProfilePageData.json'
import { FormField } from '../../components/molecules'
import { Button } from '../../components/atoms'

export function ProfilePage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset()
  }

  return (
    <MainTemplate>
      <div className={styles.Container}>
        <h2>Profile Page Route</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {ProfilePageData.fields.map(field => (
            <FormField
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              register={register}
            />
          ))}
          <Button type="submit">{ProfilePageData.button}</Button>
        </form>
      </div>
    </MainTemplate>
  )
}
