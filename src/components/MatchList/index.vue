<template>
  <section>
    <SectionHeader>
      <slot>
        Poslední odehrané
      </slot>
      <template slot="special">
        <ButtonGroup>
          <Button>
            <i class="fa fa-list" />
          </Button>
          <Button cl link>
            <i class="fa fa-th-large" />
          </Button>
        </ButtonGroup>
      </template>
    </SectionHeader>
    <div class="card-list">
      <MatchCard
        v-for="match in matches.filter((match) => match.played )"
        :key="match.id"
        :played="match.played"
      />
    </div>
    <SectionHeader>
      Následující
    </SectionHeader>
    <div class="card-list">
      <MatchCard
        v-for="match in matches.filter((match) => !match.played)"
        :key="match.id"
        :played="match.played"
      />
      <button class="btn btn-outline-secondary btn-lg btn-block more more--cl">
        Více
      </button>
    </div>
  </section>
</template>

<script>
import MatchCard from '@/components/MatchCard'
import SectionHeader from '@/components/SectionHeader'
import ButtonGroup from '@/components/ButtonGroup'
import Button from '@/components/Button'
export default {
  components: {
    MatchCard,
    SectionHeader,
    ButtonGroup,
    Button
  },
  data () {
    return {
      matches: [
        {
          id: 0,
          played: false
        },
        {
          id: 1,
          played: false
        },
        {
          id: 2,
          played: false
        },
        {
          id: 3,
          played: false
        },
        {
          id: 4,
          played: true
        },
        {
          id: 5,
          played: true
        },
        {
          id: 6,
          played: true
        },
        {
          id: 7,
          played: true
        }
      ]
    }
  }
}
</script>
