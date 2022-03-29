import { NextPage } from "next"


const ResetPage: NextPage = () => {
    return (
        <script>
            localStorage.clear()
        </script>
    )
}

export default ResetPage