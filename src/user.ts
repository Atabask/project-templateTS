import { renderBlock } from './lib.js'



export function renderUserBlock (name: string, URLAvatar: string, favoriteItemsAmount?: number): void {

  const hasFavoriteItems: number | string = favoriteItemsAmount ?  favoriteItemsAmount : "Ничего нет"

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${URLAvatar ? URLAvatar : "/img/avatar.png"} alt="Wade Warren" />
      <div class="info">
          <p class="name">${name ? name: "Wade Warren"}</p>
          <p class="fav">
            <i class="heart-icon${favoriteItemsAmount ? 'active' : ''}"></i>${hasFavoriteItems}
          </p>
      </div>
    </div>
    `
  )
}
