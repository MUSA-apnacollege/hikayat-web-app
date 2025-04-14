import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { X } from "lucide-react"
import { useAppContext } from "../context/AppContext"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  role: z.string().min(2, { message: "Role must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  avatarUrl: z.string().optional(),
})

function TeamMemberForm({ memberId, onClose }) {
  const { teamMembers, addTeamMember, updateTeamMember } = useAppContext()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      role: "",
      email: "",
      phone: "",
      avatarUrl: "",
    },
  })

  useEffect(() => {
    if (memberId) {
      const member = teamMembers.find((m) => m.id === memberId)
      if (member) {
        reset({
          name: member.name,
          role: member.role,
          email: member.email,
          phone: member.phone || "",
          avatarUrl: member.avatarUrl || "",
        })
      }
    }
  }, [memberId, teamMembers, reset])

  const onSubmit = async (values) => {
    setIsSubmitting(true)

    try {
      if (memberId) {
        updateTeamMember({
          id: memberId,
          ...values,
        })
      } else {
        addTeamMember({
          ...values,
          id: crypto.randomUUID(),
        })
      }
      onClose()
    } catch (error) {
      console.error("Error saving team member:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{memberId ? "Edit Team Member" : "Add Team Member"}</h2>
        <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full" onClick={onClose}>
          <X className="h-4 w-4" />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Name</label>
            <input
              {...register("name")}
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-200 rounded-md"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Role</label>
            <input
              {...register("role")}
              placeholder="Developer"
              className="w-full px-3 py-2 border border-gray-200 rounded-md"
            />
            {errors.role && <p className="text-red-500 text-xs">{errors.role.message}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <input
              {...register("email")}
              placeholder="john@example.com"
              className="w-full px-3 py-2 border border-gray-200 rounded-md"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Phone (Optional)</label>
            <input
              {...register("phone")}
              placeholder="+1 234 567 890"
              className="w-full px-3 py-2 border border-gray-200 rounded-md"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-sm font-medium">Avatar URL (Optional)</label>
            <input
              {...register("avatarUrl")}
              placeholder="https://example.com/avatar.jpg"
              className="w-full px-3 py-2 border border-gray-200 rounded-md"
            />
            {errors.avatarUrl && <p className="text-red-500 text-xs">{errors.avatarUrl.message}</p>}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button type="button" className="px-4 py-2 border border-gray-200 rounded-md" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-primary-DEFAULT border border-gray-200 text-black rounded-md" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : memberId ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default TeamMemberForm
