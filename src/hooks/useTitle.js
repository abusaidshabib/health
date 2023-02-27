import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
    document.title = `${title}-HealthPlus`;
  }, [title])
}

export default useTitle;