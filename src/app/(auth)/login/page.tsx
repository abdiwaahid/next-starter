import { LoginForm } from "@/components/auth/LoginForm"
import { Card } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="max-w-xl mx-auto ">
      <Card className="p-6" >
        <h1 className="text-2xl font-bold text-center mb-5">Log In</h1>
        <LoginForm />
      </Card>
    </div>
  )
}

