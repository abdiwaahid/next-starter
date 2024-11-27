import { SignUpForm } from "@/components/auth/SignUpForm"
import { Card } from "@/components/ui/card"

export default function SignUpPage() {
  return (
    <Card className="max-w-md  mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <SignUpForm />
    </Card>
  )
}

