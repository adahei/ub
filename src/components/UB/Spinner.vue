<template lang="html">
  <div>
    <section class="section calculator" v-for="spinner in spinners">
      <h2 class="section-title" id="Lönesnurra">Lönesnurra</h2>
      <div v-html="spinner.body"></div>
      <ub-range :label="spinner.range.frontend" id="frontend" :start="4" :min="4" :max="10" v-model="range.frontend" @input="calculate()"/>
      <ub-range :label="spinner.range.consult" id="consultant" :start="0" :min="0" :max="10" v-model="range.consult" @input="calculate()"/>
      <ub-range :label="spinner.range.frameworks" id="frameworks" :start="0" :min="0" :max="6" v-model="range.frameworks" @input="calculate()"/>
      <div class="checkbox-control">
        <label id="professional-value" for="professional" class="checkbox">
          <input id="professional" type="checkbox" v-model="checkboxes.exp" @change="calculate()"/>
          <span class="label">{{ spinner.checkboxes.exp }}</span>
        </label>
      </div>
      <div class="checkbox-control">
        <label id="nodejs-value" for="nodejs" class="checkbox">
          <input id="nodejs" type="checkbox" v-model="checkboxes.node" @change="calculate()"/>
          <span class="label">{{ spinner.checkboxes.node }}</span>
        </label>
      </div>

      <div class="counter">
        <ul id="counter-wrap" class="numbers-wrap">
          <li class="numbers" ref="number">
            <ul class="n n-0">
              <li class="i">0</li>
              <li class="i">1</li>
              <li class="i">2</li>
              <li class="i">3</li>
              <li class="i">4</li>
              <li class="i">5</li>
              <li class="i">6</li>
              <li class="i">7</li>
              <li class="i">8</li>
              <li class="i">9</li>
            </ul>
          </li>
          <li class="numbers" ref="number">
            <ul class="n n-0">
              <li class="i">0</li>
              <li class="i">1</li>
              <li class="i">2</li>
              <li class="i">3</li>
              <li class="i">4</li>
              <li class="i">5</li>
              <li class="i">6</li>
              <li class="i">7</li>
              <li class="i">8</li>
              <li class="i">9</li>
            </ul>
          </li>
          <li class="numbers" ref="number">
            <ul class="n n-0">
              <li class="i">0</li>
              <li class="i">1</li>
              <li class="i">2</li>
              <li class="i">3</li>
              <li class="i">4</li>
              <li class="i">5</li>
              <li class="i">6</li>
              <li class="i">7</li>
              <li class="i">8</li>
              <li class="i">9</li>
            </ul>
          </li>
          <li class="numbers" ref="number">
            <ul class="n n-0">
              <li class="i">0</li>
              <li class="i">1</li>
              <li class="i">2</li>
              <li class="i">3</li>
              <li class="i">4</li>
              <li class="i">5</li>
              <li class="i">6</li>
              <li class="i">7</li>
              <li class="i">8</li>
              <li class="i">9</li>
            </ul>
          </li>
          <li class="numbers" ref="number">
            <ul class="n n-0">
              <li class="i">0</li>
              <li class="i">1</li>
              <li class="i">2</li>
              <li class="i">3</li>
              <li class="i">4</li>
              <li class="i">5</li>
              <li class="i">6</li>
              <li class="i">7</li>
              <li class="i">8</li>
              <li class="i">9</li>
            </ul>
          </li>
          <li class="numbers" ref="number">
            <ul class="n n-0">
              <li class="i">0</li>
              <li class="i">1</li>
              <li class="i">2</li>
              <li class="i">3</li>
              <li class="i">4</li>
              <li class="i">5</li>
              <li class="i">6</li>
              <li class="i">7</li>
              <li class="i">8</li>
              <li class="i">9</li>
            </ul>
          </li>
          <li class="unit">kr/mån</li>
        </ul>
      </div>
    </section>
    <section class="calculator-send-form" v-if="salary > 0">
      <h4 class="calculator-form-header">Ange dina kontaktuppgifter i&nbsp;formul&auml;ret nedan s&aring;&nbsp;kommer vi&nbsp;kontakta dig s&aring;&nbsp;snart vi&nbsp;kan.</h4>
      <div class="calculator-form-wrap">
      <form id="calculator-send-form" @submit.prevent="sendMail()">
        <fieldset class="form-field">
          <label for="email">Ange din e-postadress</label>
          <input type="email" id="email" name="email" required placeholder="E-post" v-model="form.email"/>
        </fieldset>

        <fieldset class="form-field">
          <label for="phone">Ange ditt telefonnummer</label>
          <input type="phone" id="phone" name="phone" required placeholder="Telefonnummer" v-model="form.phone"/>
        </fieldset>

        <div class="data-error-message">Tyv&auml;rr kunde vi&nbsp;inte s&auml;nda ditt meddelande, f&ouml;rs&ouml;k igen om&nbsp;en&nbsp;liten stund</div>

        <input type="hidden" id="frontend-hidden" name="frontend_years" :value="range.frontend" />
        <input type="hidden" id="consultant-hidden" name="consultant_years" :value="range.consult" />
        <input type="hidden" id="framework-hidden" name="js_frameworks" :value="range.framework" />
        <input type="hidden" id="professional-hidden" name="professional" :value="checkboxes.exp ? 'Yes' : 'No'" />
        <input type="hidden" id="nodejs-hidden" name="nodejs" :value="checkboxes.node ? 'Yes' : 'No'" />
        <input type="hidden" id="calculation-hidden" name="salary" :value="salary" />

        <div class="calculator-form-send">
          <button type="submit" id="send-calculator-details">Skicka</button>
        </div>
      </form>
    </div>
    </section>
  </div>
</template>

<script>
import Range from '@/components/UB/Range'
import axios from 'axios'
import { ubSpinnerRef } from '../../config'
export default {
  name: 'spinner-component',
  components: {
    'ub-range': Range
  },
  data () {
    return {
      range: {
        frontend: 4,
        consult: 0,
        frameworks: 0
      },
      checkboxes: {
        exp: false,
        node: false
      },
      salary: 0,
      form: {
        email: '',
        phone: ''
      }
    }
  },
  firebase: {
    spinners: {
      source: ubSpinnerRef,
      asObject: false,
      readyCallback: function () {
        this.loading = false
      },
      cancelCallback(erro) {
        this.loading = false
      }
    }
  },
  methods: {
    calculate () {
      var fe = parseInt(this.range.frontend)
      var con = parseInt(this.range.consult)
      var fr = parseInt(this.range.frameworks)
      var pro = this.checkboxes.exp
      var node = this.checkboxes.node

      // If not a pro
      if (fe < 5 && !pro) {
        this.salary = 0
        return
      }

      var hourRate = 750

      // Frontend
      var feYearRate = [0, 25, 75, 125, 175, 200]
      var feVal = fe > 4 ? fe - 5 : 0
      hourRate += feYearRate[feVal]

      // Consultant
      hourRate += con * 5

      // Frameworks
      hourRate += (fr + 1) * 10

      // Pro
      if (pro && fe > 4) {
        hourRate += pro ? 20 : 0
      }

      // Node
      if (node) {
        hourRate += node ? 20 : 0
      }

      var workDays = 20
      var hoursPerDay = 8
      var consultantShare = 0.6
      var holidayShare = 0.12
      var salaryShare = 0.23908081

      var consultantCut = hourRate * workDays * hoursPerDay * consultantShare
      var cutWithoutHoliday = consultantCut * (1 - holidayShare)
      var bruttoSalary = cutWithoutHoliday * (1 - salaryShare)

      this.salary = bruttoSalary
    },
    updateCounter () {
      var bruttoSalary = this.salary

      var salaryArr = Math.round(bruttoSalary).toString().split('')

      var numbers = this.$refs.number
      for (var i = numbers.length - 1; i >= 0; i--) {
        numbers[i].querySelector('.n').className = 'n n-' + salaryArr.pop() || 0
      }
    },
    sendMail () {
      var form = {
        email: this.form.email,
        phone: this.form.phone,
        frontend_years: this.range.frontend,
        consultant_years: this.range.consult,
        js_frameworks: this.range.frameworks,
        professional: (this.checkboxes.exp ? 'Yes' : 'No'),
        nodejs: (this.checkboxes.node ? 'Yes' : 'No'),
        salary: this.salary
      }

      // axios.post(window.location.protocol + '//utvecklarbolaget.se/calculator.php', form)
      axios.post('https://heidmark.se/test/calculator.php', JSON.stringify(form))
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log('Error')
      })
    }
  },
  watch: {
    salary () {
      this.updateCounter()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/UB/variables';

$counter-digit-height: 60px;
$counter-width-sm: 38px;
$counter-width-lg: 50px;
$counter-height-sm: 65px;
$counter-height-lg: 65px;
$counter-font-size-sm: 46px;
$counter-font-size-lg: 46px;
$calculator-send-bg: #f8f8f8;

.checkbox-control {
  margin: 15px 0;
  .checkbox {
    display: flex;
    align-items: center;
    input[type="checkbox"] {
      width: 20px;
    }
    .label {
      flex: 1;
    }
  }
}
.counter {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.numbers-wrap {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  align-items: center;

  .numbers {

    @media (max-width: $screen-sm) {
      width: $counter-width-sm;
      height: $counter-height-sm;
      font: normal $counter-font-size-sm/1 Arial;
    }

    @media (min-width: $screen-sm) {
      width: $counter-width-lg;
      height: $counter-height-lg;
      font: normal $counter-font-size-lg/1 Arial;
    }

    background-color: #333;
    color: #fff;
    border-radius: 6px;
    margin: 0 3px;
    overflow: hidden;
    padding-top: 7px;

    &:nth-child(3) {
      margin-right: 15px;
      @media (min-width: $screen-sm) {
        margin-right: 25px;
      }
    }
  }

  .unit {
    @media (max-width: $screen-sm) {
      font-size: .7rem;
    }

    @media (min-width: $screen-md) {
      font-size: 1.5rem;
    }
  }

  .n {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transform: translateY(0);
    transition: all .3s ease-in-out;

    .i {
      height: $counter-digit-height;
      text-align: center;
    }

    @for $i from 0 through 9 {
      &.n-#{$i} {
        transform: translateY(-($i * $counter-digit-height));
        animation-delay: ($i * .1)s;
      }
    }
  }
}

.calculator-send-form {
  background-color: $calculator-send-bg;
  padding: 0;
  transition: all .3s ease-out;
  width: 100%;
  overflow: hidden;

  .calculator-form-header {
    text-align: center;
    margin-top: $spacing-lg;
    padding: 0 $spacing-sm;
  }

  .calculator-form-wrap {
    margin: 0 auto;
    padding: 0 $spacing-md $spacing-lg $spacing-md;

    @media (max-width: $screen-sm) {
      width: auto;
    }

    @media (min-width: $screen-sm) {
      width: 320px;
    }

    .form-field {
      margin-bottom: 15px;
      position: relative;

      label {
        margin-bottom: 5px;
        color: inherit;
      }
    }

    input {
      width: 100%;
    }
  }
}
</style>
