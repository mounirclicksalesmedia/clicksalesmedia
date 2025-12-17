import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { uploadImage } from '@/lib/cloudinary'

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const formData = await request.formData()
        const file = formData.get('file') as File | null
        const folder = formData.get('folder') as string || 'admin'

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            )
        }

        // Validate file type
        const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
        if (!validTypes.includes(file.type)) {
            return NextResponse.json(
                { error: 'Invalid file type. Allowed: JPEG, PNG, GIF, WebP' },
                { status: 400 }
            )
        }

        // Convert file to base64
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const base64 = `data:${file.type};base64,${buffer.toString('base64')}`

        // Upload to Cloudinary
        const result = await uploadImage(base64, folder)

        return NextResponse.json({
            url: result.url,
            publicId: result.publicId,
        })
    } catch (error) {
        console.error('Error uploading image:', error)
        return NextResponse.json(
            { error: 'Failed to upload image' },
            { status: 500 }
        )
    }
}
