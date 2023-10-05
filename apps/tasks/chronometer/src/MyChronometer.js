import { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const [YEAR_ZERO, MONTH_ZERO] = [0, 0]
let date = new Date(YEAR_ZERO, MONTH_ZERO)
let timerInterval = null
const baseTimestamp = date.getTime()

export default function MyChronometer() {
  const [timerText, setTimerText] = useState("00:00:00")
  const [lastTime, setLastTime] = useState(null)
  const [startOrPauseButtonLabel, setStartOrPauseButtonLabel] = useState("▶️")

  function toggleStartOrPauseButtonLabel() {
    if(startOrPauseButtonLabel === "⏸") {
      pause()
      setStartOrPauseButtonLabel("▶️")

      return
    }

    start()
    setStartOrPauseButtonLabel("⏸")    
  }

  function getPastDaysHours() {
    const SECONDS = 1000
    const MINUTES = 60
    const HOURS = 60
    
    return Math.floor(
      (date.getTime() - baseTimestamp) / SECONDS / MINUTES / HOURS
    )
  }

  function getFormattedDate() {
    const seconds = String(date.getSeconds()).padStart(2, '00')
    const minutes = String(date.getMinutes()).padStart(2, '00')

    const pastDaysHours = getPastDaysHours()
    const hours = String(date.getHours() + pastDaysHours).padStart(2, '00')

    return `${hours}:${minutes}:${seconds}`
  }

  function start() {
    const ONE_SECOND = 1000

    timerInterval = setInterval(() => {
      date.setTime(date.getTime() + ONE_SECOND)

      setTimerText(getFormattedDate)
    }, ONE_SECOND)
  }

  function pause() {
    clearInterval(timerInterval)
    timerInterval = (null)
  }

  function reset() {
    pause()
    setTimerText("00:00:00")
    date = new Date(0,0)
    setStartOrPauseButtonLabel("▶️")
    setLastTime(timerText)
  }

  return (
    <View style={styles.container}>
      <View style={styles.timerWrapper}>
        <Text style={styles.timerText}>{timerText}</Text>
      </View>

      <View style={styles.lastTimeWrapper}>
        <Text style={styles.lastTimeText}>{lastTime ? `Último tempo: ${lastTime}` : ""}</Text>
      </View>

      <View style={styles.timerActions}>
        <TouchableOpacity onPress={reset}>
          <View>
            <Text style={{fontSize: 50}}>🔁</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleStartOrPauseButtonLabel}>
          <View>
            <Text style={{fontSize: 50}}>{startOrPauseButtonLabel}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  timerWrapper: {
    flex: 6,
    justifyContent: 'center'
  },
  timerText: {
    fontSize: 80,
    color: '#fff',
    textAlign: 'center'
  },
  lastTimeWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  lastTimeText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#fff'
  },
  timerActions: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
})