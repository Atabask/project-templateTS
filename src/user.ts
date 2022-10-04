import { renderBlock } from './lib.js'



export function renderUserBlock (name: string, URLAvatar: string, favoriteItemsAmount: number) {

  const hasFavoriteItems = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${URLAvatar ? URLAvatar : "/img/avatar.png"} alt="Wade Warren" />
      <div class="info">
          <p class="name">${name ? name: "Wade Warren"}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? 'active' : "Ничего нет"}"></i>
          </p>
      </div>
    </div>
    `
  )
}
