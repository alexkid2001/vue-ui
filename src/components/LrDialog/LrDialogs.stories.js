import LrDialog from './LrDialog.vue'
import LrButton from '../LrButton/LrButton.vue'
import {
  getFromModal,
  getResultFromModal,
  openAlert,
} from '../../utils/dialog-promise'
import LrConfirmDialog from './LrConfirmDialog.vue'
import LrAlert from '../LrAlert/LrAlert.vue'
// import LrRedirectDialog from "./LrRedirectDialog";
import LrRedirectDialog from './LrRedirectDialog.vue'
import { ModalsContainer } from 'vue-final-modal'
import { DIALOG_TYPES } from '../../utils/enums.ts'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrDialog',
  component: LrDialog,
  argTypes: {
    title: {
      control: 'text',
    },
    confirmButtonTitle: {
      control: 'text',
    },
    cancelButtonTitle: {
      control: 'text',
    },
  },
}

const Template = args => ({
  components: { LrDialog, LrButton, ModalsContainer, LrAlert },
  setup() {
    const carId = ref()

    const openDialog = async (_, isDangerous = false) => {
      if (await confirmDialog(isDangerous ? DIALOG_TYPES.DANGEROUS : '')) {
        // console.log('answer = yes')
        openAlert(LrAlert, {
          title: 'Бронирование успешно удалено',
          subtitle: 'Bob`s your uncle',
        })
      } else {
        // console.log('answer = cancel')
        openAlert(LrAlert, {
          title: 'Ты красавчик',
          subtitle: 'Не уверен не удаляй',
        })
      }
    }

    const confirmDialog = async type => {
      const dialogResult = await getResultFromModal(LrConfirmDialog, {
        title: args.title,
        confirmButtonTitle: args.confirmButtonTitle,
        cancelButtonTitle: args.cancelButtonTitle,
        type,
      })
      return dialogResult ?? false
    }

    const openRedirectDialog = async () => {
      const autoId = await getFromModal(LrRedirectDialog, {
        title: 'Введите ID авто, на который нужно перевести заказ',
        confirmDButtonTitle: 'Перенести',
        cancelButtonTitle: 'Закрыть',
      })

      if (!autoId.result) return
      carId.value = autoId.result

      openAlert(LrAlert, {
        title: `Бронирование  переведенно на автомобиль c ID=${carId.value}`,
      })
    }

    const showAlert = () => {
      openAlert(LrAlert, {
        title: 'Пароль успешно сохранен ',
        subtitle: 'Пароль должен содержать не менее 6 латинских букв или цифр',
      })
    }

    const showModal = () => {
      openAlert(LrModal)
    }

    return {
      args,
      openDialog,
      openRedirectDialog,
      showAlert,
      carId,
    }
  },
  template: `
    <div style="display:flex;align-items:center;">
      <lr-button @click="openDialog">Open confirm dialog</lr-button>
      <lr-button @click="openDialog($event, true)" type="cancel" style="margin-left:32px">Open danger dialog</lr-button>
      <lr-button @click="openRedirectDialog" style="margin-left:32px">Open dialog with field</lr-button>
      <lr-button @click="showAlert" style="margin-left:32px">Open Alert</lr-button>
    </div>
    
    <div style="margin-top:30px;">Car ID = {{ carId }}</div> 
    <modals-container></modals-container>
  `,
})

export const Default = Template.bind({})
Default.args = {
  title: 'Уверены, что хотите удалить бронирование',
  confirmButtonTitle: 'Хочу',
  cancelButtonTitle: 'Еще подумаю',
}
