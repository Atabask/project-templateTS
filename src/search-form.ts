import { renderBlock } from './lib.js'


export function renderSearchFormBlock(dateChekin: Date | null, dateCheckout: Date | null) {

  const today: Date = new Date();
  const maxDate: Date = new Date(today.getFullYear(), today.getMonth() + 2, 0)
  const gettingTheDate = (d: Date, month: number, day: number) => {
    return `${d.getFullYear()}-${("00" + (d.getMonth() + month + 1)).slice(-2)}-${("00" + (d.getDate() + day)).slice(-2)}`
  }


  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" 
            type="date" 
            value="${dateChekin instanceof Date ? gettingTheDate(dateChekin, 0, 0) : gettingTheDate(today, 0, 2)}" 
            min="${gettingTheDate(today, 0, 0)}" 
            max="${gettingTheDate(maxDate, 0, 0)}" 
            name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" 
            type="date" 
            value="${dateCheckout instanceof Date ? gettingTheDate(dateCheckout, 0, 0) : gettingTheDate(today, 0, 3)}" 
            min="${gettingTheDate(today, 0, 3)}" 
            max="${gettingTheDate(maxDate, 0, 0)}" 
            name="checkout"/>
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
