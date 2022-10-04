import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
// import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock("Cat", "https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-35.jpg", 5)
  renderSearchFormBlock(null, null)
  renderSearchStubBlock()
  // renderToast(
  //     {
  //       text: 'Это пример уведомления. Используйте его при необходимости', type: 'success',
  //       name: '',
  //     },
  //     {
  //       name: 'Понял', handler: () => console.log('Уведомление закрыто'),
  //       text: '',
  //       type: ''
  //     }
  // )
})
