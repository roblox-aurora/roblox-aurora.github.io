<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="10">
        <!-- <v-card> -->
        <nuxt-content :document="page" />

        <v-stepper v-if="instructions" id="test" v-model="instructions.index">
          <v-stepper-header>
            <template v-for="(step, index) in instructions.steps">
              <v-stepper-step
                :key="index"
                :complete="instructions.index > index + 1"
                :step="step.step"
              >
                {{ step.title }}
              </v-stepper-step>
              <v-divider
                v-if="index < instructions.steps.length - 1"
                :key="`${index}-divider`"
              ></v-divider>
            </template>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content
              v-for="(step, index) in instructions.steps"
              :key="index"
              :step="step.step"
            >
              <!-- <v-row v-if="step.documentUri">
                <v-col cols="12" sm="8" md="10">
                  <v-subheader>
                    {{ documents[step.documentUri].title }}
                  </v-subheader>
                </v-col>
              </v-row> -->
              <v-row v-if="step.documentUri" justify="center" align="center">
                <v-col>
                  <nuxt-content
                    :document="documents[step.documentUri]"
                  /> </v-col
              ></v-row>

              <v-btn
                v-if="instructions.index > 1"
                color="danger"
                @click="instructions.index -= 1"
              >
                Back
              </v-btn>
              <v-btn
                v-if="index < instructions.steps.length - 1"
                color="primary"
                @click="instructions.index += 1"
              >
                Continue
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'roact-dnd',
  components: {},
  async asyncData({ $content, params, error }) {
    const documents = {}
    const page = await $content('roact-dnd/' + params.pathMatch ?? 'index')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'page not found' })
      })

    if (page.instructions !== undefined) {
      const { steps } = page.instructions

      for (let i = 0; i < steps.length; i++) {
        const step = steps[i]

        if (step.documentUri !== undefined) {
          documents[step.documentUri] = await $content(step.documentUri).fetch()
        }
      }
    }

    return {
      page,
      instructions: page.instructions,
      documents,
    }
  },
  data() {
    return {
      language: 'ts',
    }
  },
}
</script>
